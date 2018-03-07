/**
 * Created by dave 20180121
 * 常用小公举 
 */

const imageData = [
  'https://mobilecodec.alipay.com/show.htm?code=cpx02441suceeukrrv07k02',
  'https://mobilecodec.alipay.com/show.htm?code=cpx07553peet6h6jgx34x79',
  'https://mobilecodec.alipay.com/show.htm?code=cpx05407bopn9wnqsnhy0f1',
  'https://mobilecodec.alipay.com/show.htm?code=cpx08238nnuzfw1tyc23u58',
  'https://mobilecodec.alipay.com/show.htm?code=cpx00423z6ndoke52mpr03c',
  'https://mobilecodec.alipay.com/show.htm?code=cpx08112oxuxyrbpnzulof2',
  'https://mobilecodec.alipay.com/show.htm?code=cpx05742kdoes0rjxongdf8',
  'https://mobilecodec.alipay.com/show.htm?code=cpx04758yngsnwkyptq7qbe',
  'https://mobilecodec.alipay.com/show.htm?code=cpx07191xi4zubwf93cv8a9',
  'https://mobilecodec.alipay.com/show.htm?code=cpx08588ev1ahyjpcsmuude',
];
class Util {
  constructor() {}

  downImage(array) {
    array.forEach((item, index) => {
      const ele = document.createElement('a');
      ele.download = `${index}.png`;
      ele.href = item;
      ele.name = `${item}.png`;
      document.body.appendChild(ele);
      ele.click();
      document.body.removeChild(ele);
      ele = null;
    });
  }

}