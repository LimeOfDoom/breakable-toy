class Organization < ApplicationRecord
  has_many :users

  acts_as_messageable

  validates :name, :category, :city, :state, presence: true
end
