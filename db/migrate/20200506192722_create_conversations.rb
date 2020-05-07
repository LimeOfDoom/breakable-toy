class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.belongs_to :user, null: false
      t.belongs_to :message, null: false

     t.timestamps null: false
    end
  end
end
