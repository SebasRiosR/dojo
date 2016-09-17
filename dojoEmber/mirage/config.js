export default function() {
  this.namespace = '/api';
  this.get('/cars', function(){
    return {
      data: [{
        type: 'car',
        id: 'car001',
        attributes: {
          name: 'Rolls Royce',
          city: 'Derby',
          type: 'automóvil',
          image: 'http://buyersguide.caranddriver.com/media/assets/submodel/7505.jpg'
        }
      }, {
        type: 'car',
        id: 'car002',
        attributes: {
          name: 'Hummer',
          city: 'Detroit',
          type: 'Militar',
          image: 'http://2.bp.blogspot.com/-w75J_0ce4fI/UV8guSg-eJI/AAAAAAAAAFY/LILyvqhxl3c/s1600/02_Hummer_H1.png'
        }
      }, {
        type: 'car',
        id: 'car003',
        attributes: {
          name: 'Ford F650',
          city: 'Michigan',
          type: 'Camioneta',
          image: 'http://cdn.speednik.com/files/2014/10/img_6489_zpse97c1314.jpg'
        }
      }]
    };
  });
}
