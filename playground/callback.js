setTimeout(() => {
       console.log('Two seconds are up') 
}, 2000);

const names = ['willis', 'jess', 'dave']
const shortNames = names.filter(name => name.length <= 4)

const geocode = (addr, cb) => {
        const data = {
                lat: 0,
                long: 0
        }
}