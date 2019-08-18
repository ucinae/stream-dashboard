package hansol.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class RedisServiceImpl implements RedisService {

    private SetOperations<String, String> sop;

    RedisServiceImpl(SetOperations<String, String> sop) {
        this.sop = sop;
    }

    @Override
    public void sadd(String key, String member) {
        sop.add(key, member);
    }

    @Override
    public Long srem(String key, String member) {
        return sop.remove(key, member);
    }

    @Override
    public Set<String> smembers(String key) {
        return sop.members(key);
    }
}
