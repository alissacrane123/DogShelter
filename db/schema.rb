# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_24_193233) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dog_applications", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "dog_id", null: false
    t.integer "shelter_id"
    t.boolean "approved", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dog_id"], name: "index_dog_applications_on_dog_id"
    t.index ["shelter_id"], name: "index_dog_applications_on_shelter_id"
    t.index ["user_id"], name: "index_dog_applications_on_user_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name", null: false
    t.integer "age"
    t.integer "user_id"
    t.string "breed"
    t.integer "weight"
    t.string "picture_url"
    t.text "desc"
    t.string "status", default: "shelter"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "shelter_id"
    t.string "gender"
    t.index ["shelter_id"], name: "index_dogs_on_shelter_id"
    t.index ["user_id"], name: "index_dogs_on_user_id"
  end

  create_table "shelters", force: :cascade do |t|
    t.string "name", null: false
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zipcode"
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "phone_number"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["session_token"], name: "index_shelters_on_session_token", unique: true
    t.index ["username"], name: "index_shelters_on_username", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
