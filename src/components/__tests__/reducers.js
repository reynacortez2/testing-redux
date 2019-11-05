import {products, cart} from '../../reducers';

describe('products', () =>{
	it('returns the initial state', () => {
		expect(products(undefined, {})).toEqual([]);
	});

	it('receives products', () => {
		const productList = [{id: 1, name: "product 1", price: 100, image: ""}];

		expect(products([], {type: "REPLACE_PRODUCTS", products: productList})).toEqual(productList);
	});
});