const handler = async () => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: 'Robert'.toUpperCase()
  };
};

module.exports = { handler };
