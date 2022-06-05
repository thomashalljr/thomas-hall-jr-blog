class ContentComponent < ApplicationComponent
  CSS_CLASS = %w[
    prose
    max-w-none
    prose-p:text-muns-black
    prose-a:text-muns-ruby
    prose-a:no-underline
    prose-a:break-words
    prose-pre:overflow-x-auto
    prose-pre:px-3
    prose-pre:py-3.5
    prose-pre:rounded-md
    prose-pre:bg-gray-200
    prose-code:text-muns-black
  ].freeze

  def call
    tag.send(:div, content, class: CSS_CLASS)
  end
end
