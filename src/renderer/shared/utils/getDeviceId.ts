export const getDeviceId = () => {
  const deviceId = localStorage.getItem('deviceId');
  if (deviceId) {
    return deviceId;
  } else {
    const deviceId = String(Math.random());
    localStorage.setItem('deviceId', deviceId);
    return deviceId;
  }
};
