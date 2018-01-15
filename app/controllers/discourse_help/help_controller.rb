module DiscourseHelp
	class HelpController < ApplicationController

		def my_page
			render :json => { name: "Для чего нужен сайт Toxu.ru... " }
      rescue StandardError => e
        render_json_error e.message
   
		end

	end
end

SiteSetting.site_description = "Помощь по сайту, часто задаваемые вопросы. Информация для разработчиков. Возможности Toxu. Почему сайт назван Toxu... и многое другое."
