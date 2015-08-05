---
layout: post
title: How to start with TDD
---
*This post is a translation of my older post written in Russian*
{:.text-muted}

TDD is Test Driven Development. It is a practice of creating tests first and code that makes tests pass second.

People often have problems with this practice. They are too lazy to run the tests! To some people, it may seem easier to just write production code directly.

However, there is a way to overcome this problem. Solution is simple: just make running tests easier that not running it. It means that tests should run automatically after every change in both code and tests.

This way you can always see your red-green-refactor loop in real time without having to take deliberate action.

I advise using [Infinitest](http://infinitest.github.io/) to run your test in Eclipse or IDEA.
