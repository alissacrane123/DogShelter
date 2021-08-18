class CreateShelters < ActiveRecord::Migration[6.1]
  def change
    create_table :shelters do |t|
      t.string :name, null: false
      t.string :address
      t.string :city
      t.string :state
      t.integer :zipcode
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :phone_number
      t.string :email

      t.timestamps
    end
    add_index :shelters, :username, unique: true
    add_index :shelters, :session_token, unique: true
  end
end
