class DogApplication < ApplicationRecord

  belongs_to :users
  belongs_to :shelters
  belongs_to :dogs

  
end
