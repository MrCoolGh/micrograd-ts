self.onmessage = (event) => {
  const generateCircleData = (n) => {
    const data = [];
    const labels = [];
    for (let i = 0; i < n / 2; i++) {
      const r = Math.random() * 2;
      const t = Math.random() * 2 * Math.PI;
      data.push([r * Math.sin(t), r * Math.cos(t)]);
      labels.push(1);
    }
    for (let i = 0; i < n / 2; i++) {
      const r = Math.random() * 2.0 + 3.0;
      const t = (2 * Math.PI * i) / 50.0;
      data.push([r * Math.sin(t), r * Math.cos(t)]);
      labels.push(-1);
    }
    return {
      data, 
      labels
    }
  }

  const numDataPoints = event.data;
  const result = generateCircleData(numDataPoints);
  self.postMessage(result);
}


