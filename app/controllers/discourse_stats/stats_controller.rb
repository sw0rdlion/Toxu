module DiscourseStats
	class StatsController < ApplicationController

		def my_page
			render :json => { name: "Для чего нужен сайт Toxu.ru... " }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end


SiteSetting.site_description = "Ваши возможности на сайте Toxu. Персональная страница."
