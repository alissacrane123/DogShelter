class CreateDogApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_applications do |t|
      t.integer :user_id, null:false
      t.integer :dog_id, null: false
      t.integer :shelter_id
      t.boolean :approved, :default => false

      t.timestamps
    end
    add_index :dog_applications, :user_id
    add_index :dog_applications, :dog_id
    add_index :dog_applications, :shelter_id
  end
end
