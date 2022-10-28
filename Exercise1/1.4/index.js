const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"TranThiCamTu","age":21}'));
  console.log(isValidJSON('{"name":"TranThiCamTu",age:"21"}'));
  console.log(isValidJSON(null));