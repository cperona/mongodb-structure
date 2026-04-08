db = connect( 'mongodb://localhost/optics_store' );

db.createCollection("supplier")
db.supplier.insertMany([
  {
    _id: 1,
    name: "Javi",
    address: {
        street:"Invent",
        number:"11-13",
        floor:6,
        door:3,
        city:"Barcelona",
        postal_code:"08013",
        country:"Spain"
    },
    phone_num: "654877890",
    fax:"fax_num",
    nif:"23876520H",
  },
  {
    _id: 2,
    name: "Toco",
    address: {
        street:"Inventé",
        number:"10-12",
        floor:3,
        door:1,
        city:"Paris",
        postal_code:"02013",
        country:"France"
    },
    phone_num: "459876790",
    fax:"fax_num",
    nif:"12780976H",
  }
])

db.createCollection("set_of_glasses")
db.set_of_glasses.insertMany([
  {
    _id: 3,
    brand: "brand1",
    diopters: {
        right_eye: 1.25,
        left_eye:1.00
    },
    frame_type:"plastic frame",
    frame_color:"black",
    glass_color:"transparent",
    price:59.99,
    provider_id: 1
  },
  {
    _id: 4,
    brand: "brand2",
    diopters: {
        right_eye: 0.25,
        left_eye:1.00
    },
    frame_type:"metalic frame",
    frame_color:"black",
    glass_color:"transparent",
    price:59.99,
    provider_id: 2
  }
])

db.createCollection("clients")
db.clients.insertMany([
  {
    _id: 5,
    name:"Sergi",
    address:"Invent Street, num 2",
    phone:"658733409",
    email:"sergi@gmoil.com",
    registration_date: ISODate("2026-02-01T10:45:00Z"),
  },
  {
    _id: 6,
    name:"Dani",
    address:"Inventé, num 1",
    phone:"673890932",
    email:"dani@gmoil.com",
    registration_date: ISODate("2026-03-01T09:45:00Z"),
    recommended_by: 5
  },
])

db.createCollection("employees")
db.clients.insertOne(
  {
    _id: 7,
    name: "Emplo",
    email: "emplo@gmoil.com"
  }
)

db.createCollection("transactions")
db.transactions.insertMany([
  {
    _id: 8,
    client_id: 5,
    glasses_id: 3,
    employee_id: 7,
    date_time:ISODate("2024-11-20T16:45:00Z")
  },
  {
    _id: 9,
    client_id: 6,
    glasses_id: 4,
    employee_id: 7,
    date_time:ISODate("2026-04-03T16:45:00Z")
  }
])

db.getCollectionNames()
db.transactions.countDocuments()
db.transactions.findOne()
db.transactions.find({ client_id: 6 })
