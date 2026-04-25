# This code works but is hard to read. Refactor it.
# Goals: better variable names, add comments, extract functions, fix formatting

import sqlite3
def f(x,y,z):
 conn=sqlite3.connect('db.db')
 c=conn.cursor()
 c.execute('INSERT INTO t VALUES (?,?,?)',(x,y,z))
 conn.commit()
 conn.close()

def g(n):
 conn=sqlite3.connect('db.db')
 c=conn.cursor()
 r=c.execute('SELECT * FROM t WHERE name LIKE ?',('%'+n+'%',)).fetchall()
 conn.close()
 return r

def h(items):
 t=0
 for i in items:
  t=t+i['rating']
 if len(items)==0:
  return 0
 return t/len(items)

