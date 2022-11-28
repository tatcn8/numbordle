class CreateGuesses < ActiveRecord::Migration[7.0]
  def change
    create_table :guesses do |t|
      t.integer :value
      t.timestamps
    end
  end
end
