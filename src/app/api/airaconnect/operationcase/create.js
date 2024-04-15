const fieldChecks = [
  {
    fieldName: 'time',
    fieldType: 'string',
    required: true,
  },
  {
    fieldName: 'reporter',
    fieldType: 'string',
    required: true,
  },
  {
    fieldName: 'locationId',
    fieldType: 'string',
    required: false,
  },
  {
    fieldName: 'areaId',
    fieldType: 'string',
    required: false,
  },
  {
    fieldName: 'camera',
    fieldType: 'array',
    required: false,
  },
  {
    fieldName: 'currStatus',
    fieldType: 'string',
    required: false,
  },
  {
    fieldName: 'note',
    fieldType: 'string',
    required: false,
  },
];

module.exports = async (data) => {
  global.spiderman.systemlog.writeInfo(`operationlog create ${data.time} ${data.reporter}`);

  data = global.spiderman.validate.data({
    data,
    fieldChecks,
  });

  await global.domain.operationcase.create(data);

  global.spiderman.systemlog.writeInfo(`operationlog create ${data.time} ${data.reporter}`);

  return {
    message: 'ok',
  };
};
