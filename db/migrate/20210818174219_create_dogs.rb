class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name, null: false
      t.integer :age
      t.integer :user_id
      t.string :breed
      t.integer :weight
      t.string :picture_url
      t.text :desc
      t.string :status, :default => 'shelter'

      t.timestamps
    end
    add_index :dogs, :user_id
  end
end
