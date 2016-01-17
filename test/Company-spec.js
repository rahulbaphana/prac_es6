import Company from '../src/company.js';

describe('Company', () => {
    it('should filter employees with name beginning with T', () => {
        let count = 0;
        let company = new Company();
        company.addEmployees("Tim","Sue","Tom","Joy");

        let filter = function*(items, predicate){
            for(let item of items){
                if(predicate(item)){
                    console.log(item);
                    yield item;
                }
            }
        };

        for(let employee of filter(company, e => e[0] == 'T')){
            count = count + 1;
        }

        expect(count).toBe(2);
    });
});