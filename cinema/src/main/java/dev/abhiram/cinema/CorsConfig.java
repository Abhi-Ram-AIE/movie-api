package dev.abhiram.cinema;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("https://lighthearted-gnome-934d4e.netlify.app")
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}
