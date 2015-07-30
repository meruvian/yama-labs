package org.meruvian.yama.cs.webapi.service.commons;

import javax.inject.Inject;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.event.service.spi.EventListenerRegistry;
import org.hibernate.event.spi.EventType;
import org.hibernate.event.spi.PostInsertEvent;
import org.hibernate.event.spi.PostInsertEventListener;
import org.hibernate.event.spi.PostUpdateEvent;
import org.hibernate.event.spi.PostUpdateEventListener;
import org.hibernate.persister.entity.EntityPersister;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
public class CrudNotificationService implements PostInsertEventListener, 
		PostUpdateEventListener {
	private final Logger log = LoggerFactory.getLogger(getClass());
	
	@Inject
	private SimpMessagingTemplate messagingTemplate;
	
	@Inject
	public CrudNotificationService(EventListenerRegistry registry) {
		registry.getEventListenerGroup(EventType.POST_INSERT).appendListener(this);
		registry.getEventListenerGroup(EventType.POST_UPDATE).appendListener(this);
	}

	@Override
	public void onPostInsert(PostInsertEvent event) {
		log.debug("Sending post insert event notification");
		Object entity = event.getEntity();
		sendNotification(entity);
	}

	@Override
	public void onPostUpdate(PostUpdateEvent event) {
		log.debug("Sending post update event notification");
		Object entity = event.getEntity();
		sendNotification(entity);
	}

	@Override
	public boolean requiresPostCommitHanding(EntityPersister persister) {
		return true;
	}
	
	@Async
	private void sendNotification(Object entity) {
		String topic = StringUtils.join("/topic/crud/", entity.getClass().getSimpleName());
		log.debug("Sending to {}", topic);
		
		messagingTemplate.convertAndSend(topic, entity);
	}

}
