class Message < ApplicationRecord
  has_many :conversations
  has_many :users, through: :conversations

  validates :body, presence: true

end
