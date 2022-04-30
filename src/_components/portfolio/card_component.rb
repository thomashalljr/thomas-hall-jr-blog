module Portfolio
  class CardComponent < ApplicationComponent
    def initialize(url:, image:)
      @url = url
      @image = image
    end
  end
end
