import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface Product {
  id: number;
  name: string;
  price: number;
  description:string;
  imageUrl:string;
  
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Apples', description: 'Apples are crisp, juicy fruits with a sweet to tart flavor.', price: 10.0, imageUrl: 'https://img.freepik.com/free-vector/illustration-grapes-isolated-white-background_53876-17347.jpg?size=626&ext=jpg&ga=GA1.1.747781615.1701356983&semt=ais_user' },
    { id: 2, name: 'Carrot', description: '', price: 20.0, imageUrl: 'https://img.freepik.com/premium-photo/fresh-carrots-isolated-white-background_272787-1502.jpg?w=826' },
    { id: 3, name: 'Orange', description: 'Oranges are round, citrus fruits with a thick, orange rind and juicy, segmented flesh. ', price: 30.0,imageUrl:'https://img.freepik.com/free-psd/tangerine-fruit-isolated-transparent-background_191095-15466.jpg?t=st=1719504026~exp=1719507626~hmac=f2a7cc746f4281d1718341887ca480c685f460f621f59af930443dfb77fbc929&w=740'},
    { id: 4, name: 'Mango', description: 'Mangoes are tropical stone fruits with a smooth, orange-yellow flesh', price: 20.0, imageUrl: 'https://img.freepik.com/free-photo/mango-still-life_23-2151542183.jpg?t=st=1719505220~exp=1719508820~hmac=e002a618e2b65c80a56dfd6c17a0639c0a922564348bd6cd0ce5e3a4db547424&w=1060'},
    { id: 5, name: 'Coconut', description: 'They are rich in antioxidants, vitamins C and A, and potassium.', price: 20.0, imageUrl: 'https://img.freepik.com/free-photo/fresh-coconuts-white-surface_144627-16046.jpg?t=st=1719505660~exp=1719509260~hmac=76de4697e1c151005a15b1a7759711d6812ca12a390a9b4ab6f46e90bba918d0&w=826' },
    { id: 6, name: 'Banana', description: ' Bananas are elongated, yellow fruits with a soft, creamy flesh. ', price: 10.0,imageUrl:'https://img.freepik.com/free-photo/ai-generated-image-banana_23-2150683024.jpg?t=st=1719505623~exp=1719509223~hmac=c7b26ee8ae3dda2ec909ac07668570d654b4a30ed30fc67b6fb42cc0a67c8716&w=826'},
    { id: 7, name: 'Pineapple', description: 'Pineapples are large, tropical fruits with a spiky exterior and swee', price: 10.0, imageUrl:'https://img.freepik.com/free-photo/pineapple_144627-22187.jpg?t=st=1719505216~exp=1719508816~hmac=3b24d55672769ee3315748fa2330480b0bc40431511916a8dfc58796158043d2&w=360' },
    { id: 8, name: 'Watermelon', description: 'Watermelons are large, green fruits with a juicy, red or pink flesh', price: 20.0, imageUrl: 'https://img.freepik.com/premium-photo/sweet-watermelon-isolated_253984-4202.jpg?w=826' },
    { id: 9, name: 'Peach', description: 'Peaches are round, fuzzy fruits with a sweet, juicy flesh ', price: 10.0,imageUrl:'https://img.freepik.com/free-photo/peaches-isolated-white_114579-11955.jpg?t=st=1719505736~exp=1719509336~hmac=222f2124e7135a7ccf5012b3a4943c724210e0ada288e16101982dae0bfe5ffd&w=826'},
    { id: 10, name: 'Avocado', description: '', price: 20.0, imageUrl: 'https://img.freepik.com/premium-photo/ripe-sliced-avocado-isolated-white_80510-1234.jpg?w=826' },
    { id: 11, name: 'Pear', description: 'Pears are bell-shaped fruits with a sweet, juicy flesh', price: 10.0, imageUrl: 'https://img.freepik.com/premium-photo/pears-isolated-white-background_62856-2685.jpg?w=740' },
    { id: 12, name: 'Graps', description: 'Grapes are small, round fruits that grow in clusters', price: 10.0,imageUrl:'https://img.freepik.com/free-photo/branch-grapes-background-grape-ingredient_1203-3865.jpg?t=st=1719505867~exp=1719509467~hmac=46a0aa5aecb70a9b4474de71937be0528976bbb071689229d6f050f91a02ac57&w=360'},
    { id: 13, name: 'Guava', description: '', price: 30.0, imageUrl: 'https://img.freepik.com/premium-photo/guava-fruit-isolated-white-clipping-path_26628-336.jpg?w=740' },
    { id: 14, name: 'Plums', description: '', price: 20.0, imageUrl: 'https://img.freepik.com/free-photo/black-cherry-plums-white-table_114579-11938.jpg?t=st=1719505930~exp=1719509530~hmac=cc32352fce52509973f4b847ffadcf2a58084766be95545c9b1483050043bfcc&w=826' },
    { id: 15, name: 'Papaya', description: 'Papayas are large, pear-shaped fruits with a sweet, orange flesh', price: 30.0,imageUrl:'https://img.freepik.com/free-photo/fresh-papaya-fruit_144627-34219.jpg?t=st=1719506042~exp=1719509642~hmac=6f8455b685d78bcacb0a677646e47559897947a2b01c51dc1219d0744adaf6c0&w=826'}
    
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
