class Organization < ApplicationRecord
  has_many :relationships
  has_many :users, through: :relationships

  validates :name, :category, presence: true
  validates :ein, uniqueness: true

end
