'use strict';

const msg = { xml:
  { return_code: [ 'SUCCESS' ],
    appid: [ 'wx259291f3fd60d2e7' ],
    mch_id: [ '1515259051' ],
    nonce_str: [ 'a56533d1e2a6046c125961d9b8b90cce' ],
    req_info:
     [ 'jqGHOcvim4z00zxdacNFe5aGB4OjwOp6dmv/lE5m89f1PmWlDBIE53N7MBTbNZSkf2nuwXVhUarGsPpysjRo1jOwbDm4QkhHaErwz5f06z5iNLGrZQR9466F/nxtj9Z8/QL9eRpFrB9WX4+UqPpZWbTfVOR5FdcHrADSZbzkuY04U64eWrlPY0gPCccOF8JSuax+HrETSAT7xsp38nSnBZ0If7gAPfuhymh15YxQKvZEMWPycRR6MyaYXNfVeKFkhZLCkfWNGEkMSSregNyBIFbXF29ekMdPL19zqoMtsEcOK/bVoQfNhY+sHgW2dRlW0gjt1KFixnZz7GCw+2KBjc09EvLaxFJU6IhcgwfsyHTGB64aZWAN6jBLHjZ1XLIOcIQiU8i6NsGerHOxwkRcQ7UAk9MBLCyuv4FEYYv9BOvg6/w/rBLjiqxX8H4sCl5RjGYMkqc42g5ItfUMC7Cq+zAF0vVUcZi1H29O2S5xO82OmWsZdmZZq0Fp280WfFJCTrzcK86AKOyzKtThupv7oHwhFY9t7zn3ICioSJyztptW0CX+EyrkhkabqWyn/3uWbJWltkvgLqfJ98hadScCaUOgb0UVdH07Pp+qav2mtCiv15Q8T68Evl5ivJY8X4SUO8kGEOLzVyiwbN3IJ0vQOrKEhaDLu9R7ax3ingDWIjP5egz9MI6Yq53R27FmrqLCDwomyRFKDbO1GuNDiyf2gnm+CKzQF3KDJ/TsnfW7QQ0/QoZuSO92mHtOBef6vy0krppMwhBvbUT1hkUGAeTkTMejtpgv73d0eOKOKwRyAX0GOHlurVou+z4+T0vUfG4r5dcP+gjC6EbfBPxRXocgIQQGhVfADKcPwyc9G+s84gvz3WcgCnH+6IMRi41itwiyiQXAPU52NtqaZuxojYaHKr8bBN8ux3WE+ZhwWI5ldSn5EpkGz6Gk1xTyHSLI3hFY1q87NGTFTxQfYW7nwc4F9kFrllbpb6Uf2Wq/kgmDw9Kj6YfqEpndls5qARhfXlgNCKm/9tstKSdTgsPrlVvs8mnNQzwUwgeCYkvsNnBlh9UyThzs215tmETWcvIjpNNNGJKu+xmlwPCrDuk7Goq1Gg==' ] } };

const crypto = require('crypto');
const xml2js = require('xml2js');
const MD5 = str => {
  return crypto.createHash('md5').update(str, 'utf8').digest('hex');
};
const decryption = (data, key) => {
  const iv = '';
  const inputEncoding = 'base64';
  const outputEncoding = 'utf8';
  const decipher = crypto.createDecipheriv('aes-256-ecb', key, iv);
  console.log(decipher);
  decipher.setAutoPadding(true);
  let decipherChunks = decipher.update(data, inputEncoding, outputEncoding);
  decipherChunks += decipher.final(outputEncoding);
  return decipherChunks;
};
function buildJSON(xml) {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();
    parser.parseString(xml, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const mch_id = msg.xml.mch_id[0];
const req_info = msg.xml.req_info[0];
const key = ''; // 商户号
console.log(MD5(mch_id));

const xmlreqinfo = decryption(req_info, MD5(key));
console.log(xmlreqinfo);
async function reqInfoXml2json() {
  const result = await buildJSON(xmlreqinfo);
  console.log('key:', result);
}
reqInfoXml2json();

