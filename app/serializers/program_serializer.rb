class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :hospital, :website, :pgy1salary, :specialty, :program_size, :program_age, :state, :city, :area_type
end
