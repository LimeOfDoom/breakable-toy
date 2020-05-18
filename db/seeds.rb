  admin = User.create(email: "charityconnectoradmin@email.com", password: "charity123connector456admin", first_name: "Guy", last_name: "Admin", role: "Admin")
  org1 = Organization.create(name: "ACLU of Massachusetts", category: "Human Services", city: "Boston", state: "MA")
  volunteer = User.create(email: "volunteer@fake.com", password: "123456", first_name: "Val", last_name: "Untir", role: "volunteer")
  rep = User.create(email: "representative@fake.com", password: "123456", first_name: "Red", last_name: "Rizintitiv", role: "representative", organization_id: 1)
