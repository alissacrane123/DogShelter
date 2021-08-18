class AddShelterIdToDogs < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :shelter_id, :integer
    add_index :dogs, :shelter_id
  end
end
