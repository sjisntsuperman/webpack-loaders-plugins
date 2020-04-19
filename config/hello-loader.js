// import { getOptions } from 'loader-utils';
// import validateOptions from 'schema-utils';

// const schema = {
//   type: 'object',
//   properties: {
//     test: {
//       type: 'string'
//     }
//   }
// };

// export default function(source) {
//   const options = getOptions(this);

//   validateOptions(schema, options, 'Example Loader');

//   // 对资源应用一些转换……

//   return `export default ${ JSON.stringify(source) }`;
// }

const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  const result = source.replace('Jane', options.name);
  return result;
}

// import { getOptions } from 'loader-utils';

// export default function loader(source) {
//   const options = getOptions(this);

//   source = source.replace(/\[name\]/g, options.name);

//   return `export default ${ JSON.stringify(source) }`;
// }