class Dog < ApplicationRecord
  before_save :capitalize_name

  validates :name, presence: true

  belongs_to :user


  def capitalize_name
    name = self.name
    name[0] = name[0].upcase
    self.name = name
  end

end
