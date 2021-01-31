import t1 from './product1.png';
import t2 from './product2-pairs.png';
import t3 from './product3-pairs.png';
import t4 from './product4-pairs.png';
import tz1 from './zodiacs1.png';
import tz2 from './zodiacs2.png';
import tz3 from './zodiacs3.png';
import tz4 from './zodiacs4.png';
import p1 from './prijuostes1.png';
import p2 from './prijuostes2.png';
import p3 from './prijuostes3.png';
import p4 from './prijuostes4.png';
import h1 from './kep1.png';
import h2 from './kep2.png';
import h3 from './kep3.png';
import h4 from './kep4.png';
import d1 from './d-poroms.png';
import d2 from './d-poroms1.png';
import d3 from './d-poroms2.png';
import d4 from './d-poroms3.png';

let products = [
    {
        id: 0,
        title: 'Marškinėliai "Born to love" poromos',
        text: '35.00 €',
        price: 35,
        type: 'tshirt',
        img: t1,
        pairProduct: true
    },
    {
        id: 1,
        title: 'Marškinėliai "Pizza slice" poromos',
        text: '40.00 €',
        price: 40,
        type: 'tshirt',
        img: t2,
        pairProduct: true
    },
    {
        id: 2,
        title: 'Marškinėliai "One love" poromos',
        text: '35.00 €',
        price: 35,
        type: 'tshirt',
        img: t3,
        pairProduct: true
    },
    {
        id: 3,
        title: 'Marškinėliai "Half" poromos',
        text: '42.00 €',
        price: 42,
        type: 'tshirt',
        img: t4,
        pairProduct: true
    },
    {
        id: 4,
        title: 'Marškinėliai "Zodiakas Avinas"',
        text: '15.00 €',
        price: 15,
        type: 'tshirt',
        img: tz1
    },
    {
        id: 5,
        title: 'Marškinėliai "Zodiakas Jautis"',
        text: '15.00 €',
        price: 15,
        type: 'tshirt',
        img: tz2
    },
    {
        id: 6,
        title: 'Marškinėliai "Zodiakas Žuvis"',
        text: '15.00 €',
        price: 15,
        type: 'tshirt',
        img: tz3
    },
    {
        id: 7,
        title: 'Marškinėliai "Zodiakas Dvyniai"',
        text: '15.00 €',
        price: 15,
        type: 'tshirt',
        img: tz4
    },
    {
        id: 8,
        title: 'Prijuostė "Ponas ir Ponia" poroms',
        text: '25.00 €',
        price: 25,
        type: 'apron',
        img: p1,
        pairProduct: true
    },
    {
        id: 9,
        title: 'Prijuostė "Karalius ir Karalienė" poroms',
        text: '25.00 €',
        price: 25,
        type: 'apron',
        img: p2,
        pairProduct: true
    },
    {
        id: 10,
        title: 'Prijuostė "Kalėdų istorijų šefas"',
        text: '20.00 €',
        price: 20,
        type: 'apron',
        img: p3
    },
    {
        id: 11,
        title: 'Prijuostė "BBQ Karalius"',
        text: '22.00 €',
        price: 22,
        type: 'apron',
        img: p4
    },
    {
        id: 12,
        title: 'Kepurė "Ateivis"',
        text: '15.00 €',
        price: 15,
        type: 'hat',
        img: h1
    },
    {
        id: 13,
        title: 'Kepurė "Planeta"',
        text: '15.00 €',
        price: 15,
        type: 'hat',
        img: h2
    },
    {
        id: 14,
        title: 'Kepurė "Lietuva"',
        text: '12.00 €',
        price: 12,
        type: 'hat',
        img: h3
    },
    {
        id: 15,
        title: 'Kepurė "Vytis"',
        text: '13.00 €',
        price: 13,
        type: 'hat',
        img: h4
    },
    {
        id: 16,
        title: 'Džemperiai "Born to love"',
        text: '45.00 €',
        price: 45,
        type: 'hoodie',
        img: d1,
        pairProduct: true
    },
    {
        id: 17,
        title: 'Džemperiai "One love"',
        text: '35.00 €',
        price: 35,
        type: 'hoodie',
        img: d2,
        pairProduct: true
    },
    {
        id: 18,
        title: 'Džemperiai "Pizza slice"',
        text: '35.00 €',
        price: 35,
        type: 'hoodie',
        img: d3,
        pairProduct: true
    },
    {
        id: 19,
        title: 'Džemperiai "Half"',
        text: '50.00 €',
        price: 50,
        type: 'hoodie',
        img: d4,
        pairProduct: true
    },
];

export function getProducts(type, order) {
    let prods = products;

    if (type)
        prods = prods.filter(p => p.type === type);

    if (order) {
        if (order === 'asc')
            prods = prods.sort((a, b) => (a.price > b.price) ? 1 : -1);
        else
            prods = prods.sort((a, b) => (a.price > b.price) ? -1 : 1);
    }

    return prods;
}

export function getProductById(id) {
    return products.find(p => p.id === id);
}