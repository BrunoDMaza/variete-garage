const products = [
  {
    id: 1,
    name: "Cámara Kodak Brownie",
    description:
      "La Cámara Kodak Brownie es una línea de cámaras simples y económicas producidas por Eastman Kodak. La Brownie, introducida en 1900, inventó la fotografía de bajo costo y fue un gran éxito comercial.",
    price: 15,
    stock: 2,
    image:
      "https://es.wikipedia.org/wiki/Archivo:Kodak_Brownie_Target_Six-20.jpg",
  },
  {
    id: 2,
    name: "Radio de tubos Philco",
    description:
      "La Radio de tubos Philco es una línea de radios producida por Philco, una compañía pionera en los comienzos de la radio y la televisión.",
    price: 50,
    stock: 1,
    image:
      "https://assets.catawiki.com/image/cw_normal/plain/assets/catawiki/assets/2021/10/4/7/1/9/71963d7d-b80c-463e-a238-f1eddfa637b5.jpg",
  },
  {
    id: 3,
    name: "Máquina de escribir Underwood",
    description:
      "La Máquina de escribir Underwood es una línea de máquinas de escribir producida por Underwood Typewriter Company. La primera máquina de escribir Underwood se introdujo a mediados de 1895, y se convirtió en una de las máquinas de escribir de referencia en la época. ",
    price: 75,
    stock: 3,
    image:
      "https://th.bing.com/th/id/OIP.J_ZEaKT3hBHNUlWYtH0mFAHaFn?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Teléfono de pared Western Electric",
    description:
      "El Teléfono de pared Western Electric es una línea de teléfonos producida por Western Electric. El modelo de teléfono de pared fue patentado en 1978 y fue el primero en incorporar una pieza fundamental que amplificaba el sonido y alimentaba de energía al teléfono ",
    price: 100,
    stock: 2,
    image:
      "https://th.bing.com/th/id/R.dde575d869a9ce75f21b3cda2c942340?rik=gw5TSQ7No%2f342w&pid=ImgRaw&r=0",
  },
  {
    id: 5,
    name: "Máquina de coser Singer",
    description:
      "La Máquina de coser Singer es una línea de máquinas de coser producida por Singer. Desde su creación en 1851, Singer ha sido pionera en muchos diseños innovadores de máquinas de coser, incluida la lanzadera vibratoria y la primera máquina eléctrica. Las máquinas de coser Singer son sinónimo de precisión y calidad en el mundo de la costura",
    price: 125,
    stock: 1,
    image:
      "https://th.bing.com/th/id/OIP.bEMgWaSv2G-FvqWTxhRuHwHaFj?rs=1&pid=ImgDetMain",
  },
  {
    id: 6,
    name: "Radio de mesa Zenith",
    description:
      "El Radio de mesa Zenith es una línea de radios producida por Zenith. La compañía fue cofundada por Ralph Matthews y Karl Hassel en Chicago, Illinois, con el nombre de Chicago Radio Labs en 1918, un pequeño fabricante de equipos para radioaficionados. Zenith introdujo la primera radio portátil en 1924, la primera radio producida en serie en 1926, y la sintonización con teclado en 1927. Los radios para automóviles llegaron en la década de 1930 con su «Model 460», el cual se vendía por US$ 59,95 dólares estadounidenses de la época.",
    price: 75,
    stock: 2,
    image:
      "https://th.bing.com/th/id/OIP.fXq4OWfdKwpXn3WvVxuE7QHaGM?rs=1&pid=ImgDetMain",
  },
  {
    id: 7,
    name: "Cámara Polaroid Land",
    description:
      "La Cámara Polaroid Land es una línea de cámaras instantáneas producida por Polaroid. La primera cámara instantánea de la historia nació por la impaciencia de la hija pequeña de su inventor, Edwin Herbert Land. Ella quería ver la fotografía que le habían hecho enseguida y su padre ideó la Polaroid Land 95, la primera cámara instantánea de la historia. La Polaroid Land 95 fue la primera cámara con película instantánea que se comercializó. Estuvo en las tiendas hasta 1954, cuando se presentaron las nuevas versiones, con las que es fácil confundirla si no tienes mucha experiencia en este mundo.",
    price: 25,
    stock: 4,
    image:
      "https://coimages.sciencemuseumgroup.org.uk/images/168/595/medium__1990_5036_2828_01.jpg",
  },
  {
    id: 8,
    name: "Teléfono de escritorio Bell System",
    description:
      "El Teléfono de escritorio Bell System es una línea de teléfonos producida por Bell System. La compañía fue fundada en 1877 por Alexander Graham Bell y Gardiner Greene Hubbard, y se convirtió en la empresa de telecomunicaciones más grande del mundo en la década de 1970. Los teléfonos de escritorio Bell System eran conocidos por su durabilidad y calidad de sonido.",
    price: 60,
    stock: 1,
    image: "https://i.ytimg.com/vi/PoFIadWn8bs/maxresdefault.jpg",
  },
  {
    id: 9,
    name: "Máquina de escribir Remington",
    description:
      "La Máquina de escribir Remington es una línea de máquinas de escribir producida por Remington Typewriter Company. Desde su creación en 1873, Remington ha sido pionera en muchos diseños innovadores de máquinas de escribir, incluida la primera máquina de escribir comercialmente exitosa. Las máquinas de escribir Remington son sinónimo de precisión y calidad en el mundo de la escritura.",
    price: 50,
    stock: 3,
    image:
      "https://th.bing.com/th/id/OIP.aRzIx5v0pnhz3P1gOabbfQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 10,
    name: "Radio de tubos RCA Victor",
    description:
      "El Radio de tubos RCA Victor es una línea de radios producida por RCA Victor. La compañía fue fundada en 1901 por Eldridge R. Johnson y Emile Berliner, y se convirtió en una de las empresas de electrónica más grandes del mundo en la década de 1920. Los radios de tubos RCA Victor eran conocidos por su calidad de sonido y durabilidad.",
    price: 90,
    stock: 2,
    image:
      "https://th.bing.com/th/id/OIP.2at7xMUQyp9OOdr6iJyKAwHaFT?rs=1&pid=ImgDetMain",
  },
  {
    id: 11,
    name: "Cámara Kodak Retina",
    description:
      "La Cámara Kodak Retina es una línea de cámaras producida por Kodak. La Retina se introdujo en el mercado en 1934 siendo la primera cámara Kodak de 35 mm y la que introdujo la película 135 de 35 mm en cartuchos. Las cámaras Retina se fabricaron en Stuttgart-Wangen por la Kodak AG Dr. Nagel Werk, que Kodak había adquirido en diciembre de 1931. Las cámaras Retina se caracterizan por su tamaño compacto, alta calidad y bajo costo en comparación con los competidores.",
    price: 40,
    stock: 1,
    image:
      "https://th.bing.com/th/id/R.8deb0e7ddde2a96776cf7b706edfbd23?rik=Gw4XbvojhE6nfA&riu=http%3a%2f%2fwww.mikeeckman.com%2fwp-content%2fuploads%2f2016%2f02%2fRetinaIIc1-1024x678.jpg&ehk=pL9TTeLiTb56UTnrcgpNkGhilyQm%2bELfgHqvsT5CZnA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 12,
    name: "Teléfono de pared Kellogg",
    description:
      "El Teléfono de pared Kellogg es una línea de teléfonos producida por Kellogg. La compañía fue fundada en 1901 por Milo G. Kellogg, y se convirtió en una de las empresas de telecomunicaciones más grandes del mundo en la década de 1920. Los teléfonos de pared Kellogg eran conocidos por su durabilidad y calidad de sonido.",
    price: 150,
    stock: 1,
    image:
      "https://th.bing.com/th/id/OIP.suhjOWopiB1kgRtyx11T0wHaMA?rs=1&pid=ImgDetMain",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 4000);
  });
};

export const getProductsAsync = () => {
  return fetch("fakestoreapi.com/products/").then((res) => res.json());
};

export const getProductsAsyncbyId = (id) => {
  return fetch("fakestoreapi.com/products/${id}").then((res) => res.json);
};
