module Jekyll
  class FuturePosts < Liquid::Tag
    def render context
      @cache ||= render_slow context
    end
    def render_slow context
      site = context.registers[:site]
      config = site.config
      config["future"] = true
      newsite = Jekyll::Site.new(site.config)
      newsite.read

      now = Time.now
      newsite.posts.select{|e| e.date > now }.map{|e| "<li>#{e["title"]}</li>" }
    end
  end
end

Liquid::Template.register_tag('future_posts', Jekyll::FuturePosts)
