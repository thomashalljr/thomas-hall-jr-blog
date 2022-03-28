module Portfolio
  class Card < ApplicationComponent
    def initialize(url:, image:)
      @url = url
      @image = image
    end
  end
end
