const productos = [
    {
      id: '1', 
      nombre:'GTAR 9 500W 10,2Ah',
      descripcion:'El GTAR 9 es una excelente opción para los conductores que necesitan recorrer largas distancias pero que a su vez quieren algo compacto y cómodo. Este monopatín equilibrado del mercado ofrece un bajo peso, tamaño y precio competitivo. Se destaca por su gran potencia, autonomía y freno trasero a tambor. Todo esto en tan solo 18kg. Acercate a probarlo y movete por la ciudad sin limites! Dispone de doble amortiguación, rodado de pista marca Zero, iluminación delantera, trasera y de presencia.',
      imagen:'https://firebasestorage.googleapis.com/v0/b/ewheels-eab93.appspot.com/o/GTAR-9-500W-10_2Ah-01.jpg?alt=media&token=fe00794a-8524-4d3a-95f4-c63324f655fa',
      precio: 159900,
      stock: 0,
      categoria:'Monopatines'
    },
    {
      id: '2',
      nombre:'GTAR 10X Dual 3000W 23Ah LG',
      descripcion:'El GTAR 10X de doble motor que ofrece un excelente desempeño en todo tipo de terreno, puede alcanzar una velocidad máxima de hasta 65 km/h. Con sus neumáticos de 10 x 3 pulgadas y una suspensión delantera y trasera mono shock con espiral que permite que este scooter maneje fácilmente por las carreteras.',
      imagen:'https://firebasestorage.googleapis.com/v0/b/ewheels-eab93.appspot.com/o/GTAR-10X-Dual-3000W-01.jpg?alt=media&token=a9f96287-3b4b-4081-962a-809730406d13',
      precio: 159900,
      stock: 10,
      categoria:'Monopatines'
    },
    {
      id: '3',
      nombre:'ACCOLMILE 27.5 INCH*2.2 TIRE BAFANG 36V 250W M200 MID MOTOR MOUNTAIN E-BIKE',
      descripcion:'Presentamos nuestra gama europea de bicicletas eléctricas de montaña, con la ultima tecnología en movilidad. Su pantalla LCD puede monitorear la velocidad, el uso de la batería y la distancia del viaje. Tiene una función de límite de velocidad de 5 niveles. Posee freno de disco hidráulico JAK, sistema de suspensión de horquilla delantera con absorción de impactos que reduce efectivamente las interrupciones y responde a diversas condiciones de la carretera. Cuenta con un completo sistema de iluminación LED para mantenerte seguro.',
      imagen:'https://firebasestorage.googleapis.com/v0/b/ewheels-eab93.appspot.com/o/ACCOLMILE-27_5-INCH_2_2-TIRE-BAFANG-36V-250W-M200-MID-MOTOR-MOUNTAIN-E-BIKE-01.jpg?alt=media&token=059c17e6-0d14-4333-818b-ac73f6aa69af',
      precio: 675800,
      stock: 10,
      categoria:'Bicicletas'
    },
    {
      id: '4',
      nombre:'GTAR Ghost 10 PLUS - Dual 2000W 23 Ah LG',
      descripcion:'Impresionante es el nuevo GTAR GHOST 10, dispone las características más populares del 10X e introduce una serie de cambios que hacen este modelo más compacto y refinado. El GHOST 10 también presenta una serie de características muy demandadas, como manillares plegables o iluminación de presencia debajo de la plataforma reposapiés. Desplázate como nunca en el GTAR GHOST 10 con sistema de resorte doble, inspirado en la suspensión líder del 10X, además la suspensión se puede ajustar fácilmente con una llave Allen. Aunque cuenta con neumáticos grandes de 10 pulgadas, el GHOST fue diseñado con una distancia al suelo más baja. Así que súbete y disfruta del nuevo producto GTAR. Liviano, solo 29 kg, rápido y divertido es solo la primera sensación que vas a encontrar en este nuevo producto de la familia GTAR.',
      imagen:'https://firebasestorage.googleapis.com/v0/b/ewheels-eab93.appspot.com/o/GTAR-Ghost-10-Dual-2000W-01.jpg?alt=media&token=6990e8b5-0759-4d47-912d-bb6245f4dcb9',
      precio: 396900,
      stock: 10,
      categoria:'Monopatines'
    },
    {
      id: '5',
      nombre:'KANY Max 10X',
      descripcion:'Monopatin Eléctrico Plegable 10″ Kany – Modelo Max 10X – 2000W Motor Dual – Color Negro',
      imagen:'https://firebasestorage.googleapis.com/v0/b/ewheels-eab93.appspot.com/o/KANY-Max-10X-01.jpg?alt=media&token=cece9688-77bb-46e0-b2eb-115b0f9b74e8',
      precio: 310200,
      stock: 10,
      categoria:'Monopatines'
    },
    {
      id: '6',
      nombre:'Asiento ajustable con amortiguación',
      descripcion:'Asiento construido en aluminio',
      imagen:'https://firebasestorage.googleapis.com/v0/b/ewheels-eab93.appspot.com/o/Asiento-ajustable-con-amortiguaci_n-01.jpg?alt=media&token=bc5d5eee-b42d-4dbe-85fa-243db87e71dc',
      precio: 11990,
      stock: 10,
      categoria:'Accesorios'
    },
    {
      id: '7',
      nombre:'BAG Linea Zero',
      descripcion:'Bolsa porta objetos para monopatines. 4 Litros de capacidad. Resistente al agua. Medidas: 30cm x 15,5cm x 13cm',
      imagen:'https://firebasestorage.googleapis.com/v0/b/ewheels-eab93.appspot.com/o/BAG-Linea-Zero-01.jpg?alt=media&token=1dc7d315-c753-4fb4-9ab7-569b2b1b65f9',
      precio: 6260,
      stock: 10,
      categoria:'Accesorios'
    },
    {
      id: '8',
      nombre:'SEGWAY NINEBOT E22',
      descripcion:'El scooter eléctrico de elección, Ninebot KickScooter E22 adopta un diseño de marco integrado, elegante pero simple con un proceso de recubrimiento mate, brindando una textura excepcional al vehículo. Se esfuerza por alcanzar nuevas alturas de rendimiento con el BDLC. La actualización viene en forma de una mayor dinámica de conducción proporcionada por una aceleración más rápida más una capacidad de pendiente del 15%.',
      imagen:'https://firebasestorage.googleapis.com/v0/b/ewheels-eab93.appspot.com/o/SEGWAY-NINEBOT-E22-01.jpg?alt=media&token=0c0e3187-d764-4d31-ba23-a45429d4e8e7',
      precio: 113400,
      stock: 10,
      categoria:'Monopatines'
    },
  ]
  
  export const getFetch = new Promise((res, rej)=>{
    let url = 'api'
    if(url === 'api'){
      setTimeout(() => {
        res(productos)
      }, 3000);
    }else{
      rej('400 error')
    }
  })