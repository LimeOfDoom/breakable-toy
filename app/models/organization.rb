class Organization < ApplicationRecord
  has_many :users

  validates :name, :category, :city, :state, presence: true
end
