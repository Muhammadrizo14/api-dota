import roles from "./seeders/roles.seed";
import hardly from './seeders/hardly.seed'
import attribute from "./seeders/attribute";
import typeOfAttack from "./seeders/typeofattack";
import Hero from './seeders/hardly.seed'

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const seedData = [roles, hardly, attribute, typeOfAttack, Hero]

async function main() {
  for (let i = 0; i < seedData.length; i++) {
    await prisma[seedData[i]['tag']].createMany({
      data: seedData[i]['data']
    })
  }
}

main().catch(e => {
  console.log(e)
  process.exit(1)
}).finally(() => {
  console.log("\ndone")
  prisma.$disconnect()
})