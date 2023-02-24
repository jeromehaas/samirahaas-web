module.exports = ({ env }) => ({
	upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('SPACE_ACCESS_KEY_ID'),
        secretAccessKey: env('SPACE_ACCESS_SECRET'),
        endpoint: env('SPACE_ENDPOINT'), // e.g. "s3.fr-par.scw.cloud"
        params: {
          Bucket: env('SPACE_BUCKET'),
        },
      },
    },
  },
});