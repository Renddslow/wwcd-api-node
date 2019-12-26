const catchify = require('catchify');

module.exports = (cb) => (type) => async (req, res) => {
  const [err, data] = await catchify(cb(req.params, req.query, req.body, req.user, req));

  if (err) {
    res.statusCode = err.status || 500;
    return res.json({
      errors: [err],
    });
  }

  if (Array.isArray(data)) {
    if (!data.length) {
      return res.json({ data: [] });
    }

    res.json({
      data: data.map((d) => ({
        id: d.id,
        type,
        attributes: d,
      })),
    });
  } else {
    res.json({
      data: {
        type,
        id: data.id,
        attributes: data,
      },
    });
  }
};
