class ApplicationComponent < ViewComponent::Base
  include Bridgetown::ViewComponentHelpers
  Bridgetown::ViewComponentHelpers.allow_rails_helpers :tag
end
