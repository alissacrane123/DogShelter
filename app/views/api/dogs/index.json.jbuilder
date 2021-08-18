@dogs.each do |dog|
  json.set! dog.id do
    json.partial! 'dog', dog: dog
  end
end