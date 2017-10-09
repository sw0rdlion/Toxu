module DiscourseDev
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseDev

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseDev::Engine, at: "/"
		end
    end
  end
end

module DiscourseHots
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseHots

    config.after_initialize do
		Discourse::Application.routes.append do
			mount ::DiscourseHots::Engine, at: "/"
		end
    end
  end
end
