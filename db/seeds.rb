# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shelter.destroy_all
Dog.destroy_all

shelter = Shelter.create!(name: 'Alissa Shelter', username:'alissacrane', password:'password', zipcode: 11211)

Dog.create!(shelter_id: shelter.id, name:'Biggie', age: 1, breed: 'Pitbull', gender: 'male', desc: 'If you are looking for a super loving, goofy, friendly, smart dog who will put a smile on your face everyday then look no further, Biggie is your boy! He has so much love to give and truly thrives on human attention.

Biggie loves going on walks, playing fetch, and wrestling with his doggie friends. Give him a ball and he can entertain himself for hours. Afterwords, he loves nothing more than cuddling with his human. He still thinks he is a baby and will crawl right into your lap if you let him.

Biggie is great on his leash and rarely pulls. He is also great with all dogs and has never had a problem although sometimes he doesn’t understand that smaller dogs may not want to play with him.

He is also very well house trained (he’s never once had an accident in his foster’s house) and generally has good house manners.

He is highly food motivated, learns extremely quickly, and has so much potential! Truly one of the sweetest dogs around.')


User.create!(email:'alissa@gmail.com', password:'password', first_name:'Alissa', last_name:'Crane')