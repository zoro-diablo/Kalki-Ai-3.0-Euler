export const optionTwo = {
    chart: {
      height: 300,
      width: "100%",
      type: "line",
      zoom: {
        autoScaleYaxis: true,
      },
      toolbar: {
        show: true,
      },
    },
    markers: {
      size: 0,
      colors: '#58dbf5',
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Top Performance",
        data: [45, 52, 38, 45, 19, 33]
      }
    ],
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan"
      ]
    },
    yaxis: {
      opposite: true,
    },
    tooltip: {
      theme: 'dark',
    },
  };
  