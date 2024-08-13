const id = 1;
const name = "Dhoni";
const city = "Chennai";

console.log("id: " + id + " name: " + name + " city: " + city);

console.log(`id: ${id} name: ${name} city: ${city}`);

function createEmail(person, purchaseCost) {
  const shippingCost = 100;
  console.log(`
Thanks ${person} for buying from us!!!
Purchase Cost: $${purchaseCost}
Shipping Cost: $${purchaseCost}
Grand Total: $${purchaseCost + shippingCost}
`);
}

createEmail("Amit", 2000);
