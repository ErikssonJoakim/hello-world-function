function parseOptions(body) {
  if (!body) return {};
  if (Buffer.isBuffer(body)) body = body.toString('utf8');
  if (typeof body === 'string') {
    if (body.trim() === '') return {};
    return JSON.parse(body);
  }
  return body;
}

function json(status, payload) {
  return {
    status,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload, null, 2) + '\n',
  };
}

module.exports = async function (context) {
  let options;
  try {
    options = parseOptions(context?.request?.body);
  } catch {
    return json(400, { error: 'Request body must be valid JSON' });
  }

  if (options.showEnvs !== undefined && typeof options.showEnvs !== 'boolean') {
    return json(400, { error: 'showEnvs must be a boolean' });
  }

  const response = { message: 'Hello, World!' };
  if (options.showEnvs) response.envs = process.env;

  return json(200, response);
};
